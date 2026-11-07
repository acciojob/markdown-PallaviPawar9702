
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div>
      <div>
        <h2>Markdown Editor</h2>

        <div className="editor-container">
          <div>
            <h3>Markdown Input</h3>

            <textarea
              className="textarea"
              placeholder="Write your markdown here..."
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>

          <div>
            <h3>Preview</h3>

            <div className="preview">
              <ReactMarkdown>{preview}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
