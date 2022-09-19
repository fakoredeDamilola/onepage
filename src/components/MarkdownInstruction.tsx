import React from "react";
import styled from "styled-components";

const Layout = styled.div`
 /* padding: 20px 5px; */
  position: fixed;
  top: calc(50% - 250px);
  z-index: 99999;
  height: 500px;
  width: 40%;
  margin: 0 auto;
  top:20%;
  overflow-y: scroll;
  padding: 0 20px;
  box-sizing: border-box;
  border: 2px solid black;
  background:white;
  position:fixed;
 right:100px;
  & h1 {
    border-bottom: 2px solid black;
  padding: 14px 0;
  }
  & > p,& > div {
    padding:20px 0;
  }
& a {
    color:blue;
}
  `
const CodeDiv = styled.div`
     background-color: black;
  padding: 15px;
  color:white;
  margin: 10px 0;
`
const CloseButton = styled.div`
    position:absolute;
    right:40px;
    top:30px;
    font-size:16px;
    cursor:pointer;
`
const MarkdownInstruction = ({setMarkdown} :{setMarkdown: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const comment = "<!-- This won't show up in the content! -->";
  const fig = "<figcaption>this is a caption</figcaption>";
  const link = '<a name="chapter-1"></a>';

  return (
    <Layout>
        <CloseButton onClick={()=>setMarkdown(false)}>X</CloseButton>
        <h1>Markdown</h1>
      <p>
        Below are some examples of commonly used markdown syntax. If you want to
        dive deeper, check out this cheat sheet.
      </p>
      <div>
        <h2>Bold & Italic</h2>
        <p>
          <span>Italics</span> : *asterisks* or _underscores_
        </p>
        <p>
          <span>Bold</span>: **double asterisks** or __double underscores__
        </p>
      </div>
      <div>
        <h2>Links</h2>
        <p>
          <span>I'm an inline link</span>
        </p>
        <CodeDiv>
          <code>[I'm an inline link](put-link-here)</code>
        </CodeDiv>
        <p>
          <span>Anchored links</span> (For things like a Table of Contents)
        </p>
        <CodeDiv>
          <code>
            <p>## Table Of Contents </p>
            <ul style={{ listStyle: "none", marginLeft: "20px" }}>
              <li>* [Chapter 1](#chapter-1) </li>
              <li>* [Chapter 2](#chapter-2) </li>
            </ul>
            <p>### Chapter 1</p>
            {link}
          </code>
        </CodeDiv>
      </div>
      <div>
        <h2>Inline Images</h2>
        <CodeDiv>
          <code>![Alt text of image](put-link-to-image-here)</code>
        </CodeDiv>

        <p>
          You can even add a caption using the html figcaption tag below the
          link
        </p>
        <CodeDiv>
          <code>{fig}</code>
        </CodeDiv>
      </div>
      <div>
        <h2>Headers</h2>

        <p>Add a header to your post with this syntax:</p>

        <div className="codeDiv">
          <code>
            <p># One '#' for a h1 header</p>
            <p>## Two '#'s for a h2 header</p>
            <p>...</p>
            <p>###### Six '#'s for a h6 header</p>
          </code>
        </div>
        <div>
          <p>One '#' for a h1 header</p> <p>Two '#'s for a h2 header</p>
          <p>Three '#'s for a h2 header</p>
          <p>Four '#'s for a h4 header</p>
          <p>Five '#'s for a h5 header</p>
          <p>Six '#'s for a h6 header</p>
        </div>
      </div>
      <div>
        <h2>Author Notes/Comments</h2>

        <p>Add some hidden notes/comments to your article with this syntax:</p>

        <CodeDiv>
          <code>{comment}</code>
        </CodeDiv>
      </div>
      <div>
        <h2>Common Gotchas</h2>

        <p>
          Lists are written just like any other Markdown editor. If you're
          adding an image in between numbered list, though, be sure to tab the
          image, otherwise it'll restart the number of the list.{" "}
        </p>
        <p>
          Here's the{" "}
          <a
            href="https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet"
            target="_blank"
          >
            Markdown cheatsheet
          </a>{" "}
          again for reference.
        </p>
      </div>
    </Layout>
  );
};
export default MarkdownInstruction;