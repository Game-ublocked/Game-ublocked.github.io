import os

def update_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if '<h1>Portal</h1>' in content:
                        print(f"Updating {filepath}")
                        new_content = content.replace('<h1>Portal</h1>', '<h1>unblocked</h1>')
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    base_dir = '/Users/pingwin/Desktop/GAMEREPO'
    update_files(base_dir)
    print("Batch update complete.")
