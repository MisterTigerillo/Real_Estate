import React, { Component } from "react";

import { GalleryNav } from "./GalleryNav";
import { GalleryEstate } from "./DealsGallery";

class GalleryTabs extends Component {
  state = {};

  render() {
    return (
      <>
        <GalleryNav />
        <GalleryEstate />
      </>
    );
  }
}

export default GalleryTabs;
