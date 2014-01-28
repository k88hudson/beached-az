
(function() {
  function walk(node) {

    // This is all from cloud-to-butt
    var child, next;

    switch (node.nodeType) {
      case 1: // Element
      case 9: // Document
      case 11: // Document fragment
        child = node.firstChild;
        while (child) {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;

      case 3: // Text node
        handleText(node);
        break;
    }
  }
  function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\bis\b/g, "az");
    v = v.replace(/\btwitter\b/g, "twutter");
    v = v.replace(/\bTwitter\b/g, "Twutter");
    v = v.replace(/\bI\b/g, "Beached az! I");
    v = v.replace(/\bvery\b/g, "heaps");
    v = v.replace(/tickle/g, "tuckle");
    v = v.replace(/tweet/g, "twutt");
    v = v.replace(/Tweet/g, "Twutt");
    v = v.replace(/big/g, "bug");
    v = v.replace(/kid/g, "kud");
    v = v.replace(/Kid/g, "Kud");
    v = v.replace(/Big/g, "Bug");
    v = v.replace(/fish/g, "fush");
    v = v.replace(/Fish/g, "Fush");
    v = v.replace(/chip/g, "chup");
    v = v.replace(/Chip/g, "Chup");
    v = v.replace(/!/g, ", bru!");

    textNode.nodeValue = v;
  }
  walk(document.body);
}());
