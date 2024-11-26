import re
import json
import sys

def clean_text(text):
    # Remove HTML comments
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)
    # Remove variable setting statements
    text = re.sub(r'\(set:.*?\)', '', text)
    # Remove choice text
    text = re.sub(r'\[\[.*?\]\]', '', text)
    # Remove empty lines and trim
    text = '\n'.join(line.strip() for line in text.split('\n') if line.strip())
    return text

def parse_twee_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    passages = re.split(r'\n:: ', content)
    passages = [p.strip() for p in passages if p.strip()]

    json_data = []

    for passage in passages:
        if passage.startswith('StoryData') or not re.match(r'^\w+', passage):
            continue

        lines = passage.split('\n')
        header = lines[0]
        text = '\n'.join(lines[1:])

        id_match = re.match(r'(\w+)', header)
        id = id_match.group(1) if id_match else None

        if '<!--Section break-->' in text:
            node_type = 'section_break'
        else:
            node_type = 'choice'

        choices = re.findall(r'\[\[(.+?)\]\]', text)
        choices_data = []

        for choice in choices:
            if '|' in choice:
                choice_text, next_id = choice.split('|')
            else:
                choice_text = choice
                next_id = choice

            choice_data = {
                "text": choice_text.strip(),
                "next": next_id.strip(),
                "profitChange": 0,
                "legitimacyChange": 0
            }
            choices_data.append(choice_data)

        cleaned_text = clean_text(text)

        # Check for variable changes in the next node
        for choice in choices_data:
            next_node = next((p for p in passages if p.startswith(choice['next'])), None)
            if next_node:
                profit_change = re.search(r'\(set: \$profit to it ([+-] \d+)\)', next_node)
                legitimacy_change = re.search(r'\(set: \$legitimacy to it ([+-] \d+)\)', next_node)
                
                if profit_change:
                    choice['profitChange'] = int(profit_change.group(1).replace(' ', ''))
                if legitimacy_change:
                    choice['legitimacyChange'] = int(legitimacy_change.group(1).replace(' ', ''))

        node_data = {
            "id": id,
            "type": node_type,
            "text": cleaned_text,
            "choices": choices_data
        }

        json_data.append(node_data)

    return json_data

def write_js_file(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write("const gameData = \n")
        json.dump(data, file, indent=4, ensure_ascii=False)
        file.write(";\n\n\nexport default gameData;")

def main():
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_twee_file> <output_js_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    try:
        json_data = parse_twee_file(input_file)
        write_js_file(json_data, output_file)
        print(f"Conversion successful. JS data written to {output_file}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()
