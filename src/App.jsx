import { useState, memo } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const defaultMarkdown = `
# Welcome to my Awesome Markdown Previewer!

## Here's a secondary heading...
### Let's dive into more cool stuff:

You can write some inline code like this: \`console.log('Hello World');\`.

\`\`\`
// Here's a multi-line code block example:

function greetUser(name) {
  return \`Hello, \${name}! Welcome to Markdown Previewer!\`;
}
\`\`\`

Make text **bold**, or maybe _italic_, or even **_both!_**

Don't forget about [useful links](https://developer.mozilla.org)!

> “The best way to predict the future is to create it.” – Peter Drucker

And check out this image of Markdown:
![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

- Lists are essential too.
  - You can nest them.
    - Just like this.
      - With varying levels of indentation.

Here's a line  
And another line, which should break!`;

function App(){
  console.log("render");
  return(
    <div>
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <MarkdownPreviewerMemo />
    </div>
  )
}



const MarkdownPreviewerMemo = () => {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  console.log("render2"); //comment je peux eviter que ce soit render a chaque fois !! d'apres melvynx c pas un probleme dans se cas

  return (
    <>
      <div>
        <div className="boxes-container">
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(event) => setMarkdownText(event.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown
             remarkPlugins={remarkBreaks}
            >{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;