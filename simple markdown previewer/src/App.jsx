import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(`# Markdown Previewer

## Welcome

Type Markdown on the left.

### Example

- React
- Markdown
- Preview

**Bold Text**

*Italic Text*

[OpenAI](https://openai.com)

\`\`\`javascript
const hello = "world";
console.log(hello);
\`\`\`
`);

  return (
    <div className="app">
      <div className="overlay">
        <h1>Markdown Previewer</h1>

        <div className="container">
          <div className="editor-section">
            <h2>Editor</h2>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Write Markdown here..."
            />
          </div>

          <div className="preview-section">
            <h2>Preview</h2>
            <div
              className="preview"
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;