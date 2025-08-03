figma.showUI(__html__, { 
  width: 400, 
  height: 600,
  themeColors: true 
});

figma.ui.onmessage = msg => {
  if (msg.type === 'resize') {
    figma.ui.resize(msg.width, msg.height);
  }
  if (msg.type === 'reload') {
    figma.showUI(__html__, { 
      width: 400, 
      height: 600,
      themeColors: true 
    });
  }
};