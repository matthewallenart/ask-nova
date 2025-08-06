figma.showUI(__html__, {
  width: 400,
  height: 600,
  themeColors: true
});

figma.ui.onmessage = msg => {
  // Validate message structure
  if (!msg || typeof msg !== 'object' || !msg.type) {
    console.warn('Invalid message received');
    return;
  }

  switch (msg.type) {
    case 'resize':
      // Validate and sanitize dimensions
      const width = Math.max(200, Math.min(1200, parseInt(msg.width) || 400));
      const height = Math.max(300, Math.min(800, parseInt(msg.height) || 600));
      figma.ui.resize(width, height);
      break;

    case 'reload':
      figma.showUI(__html__, {
        width: 400,
        height: 600,
        themeColors: true
      });
      break;

    default:
      console.warn('Unknown message type:', msg.type);
  }
};
