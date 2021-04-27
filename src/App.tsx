import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ComponentsManager, Renderer } from '@simpleblocks/core';

const pageTemp: any = {
  id: "12345",
  name: "Home - Demo",
  slug: "/home",
  blocks: {
    wrapper: {
      type: "div",
      parent: null,
      htmlProps: {
        id: "wrapper",
      },
      children: [
        "ULvZRM"
      ],
      classNames: [],
    },
    ULvZRM: {
      type: "text",
      parentId: "wrapper",
      htmlProps: {
        id: "ULvZRM",
      },
      stateProps: {
        text: "Hello World!",
      },
      styles: {
        position: "relative",
        fontSize: "24px",
        paddingRight: "40px",
        color: "#ffffff",
        fontWeight: "500",
        marginTop: "30px",
        marginLeft: "20px",
        marginBottom: "0",
      },
      blocks: [],
      classNames: [],
    },
  },
};

function App() {
  
  const components = new ComponentsManager();
  console.log(components.getDefinition('text'))

  const renderer = new Renderer(components)

  // const sb = new SimpleBlocks({
  //   components: [],
  //   sections: [],
  //   template: {
  //     styles: {},
  //     colors: {},
  //   },
  //   globalStyles: {},
  //   linkResolver: (link: string) => link,
  // });

  const page = {
    components: [],
    sections: [],
    page: pageTemp,
    template: {
      styles: {},
      colors: {},
    },
    globalStyles: {},
    linkResolver: (link: string) => link,
  }

  // const pageConfig = sb.getPageConfig(pageTemp);

  // console.log("PAGE CONFIG", pageConfig)
  // console.log("PAGE CONFIG", pageConfig.components.getProps('div'))

  // const pageRenderer = new Renderer();
  // console.log("PAGE RENDERED", pageRenderer.renderTopLevelComponent('wrapper', pageConfig))

  const toRender = renderer.renderTopLevelBlock('wrapper', page);

  return toRender;
}

export default App;
