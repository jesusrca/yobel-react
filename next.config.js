"use strict";

const path = require("path");
const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Map any figma:asset/* import to a shared placeholder so builds don't fail.
    const placeholderModule = path.resolve(__dirname, "figma-placeholder.js");
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^figma:asset\/.*/, (resource) => {
        resource.request = placeholderModule;
      })
    );
    return config;
  }
};

module.exports = nextConfig;
