const applyStyles = (element, styles) =>
  Object.entries(styles).forEach(
    ([key, value]) => (element.style[key] = value)
  );

chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      const injection = document.createElement("div");
      document.body.appendChild(injection);
      applyStyles(injection, {
        position: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        right: 0,
        width: "1.75in",
        height: "0.5in",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      });

      const cameraSlot = document.createElement("div");
      injection.appendChild(cameraSlot);
      applyStyles(cameraSlot, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      });

      const cameraHole = document.createElement("div");
      cameraSlot.appendChild(cameraHole);
      applyStyles(cameraHole, {
        width: "0.35in",
        height: "0.35in",
        backgroundColor: "#111",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      });

      const irisHole = document.createElement("div");
      cameraHole.appendChild(irisHole);
      applyStyles(irisHole, {
        width: "0.05in",
        height: "0.05in",
        backgroundColor: "#080808",
        borderRadius: "100%",
      });
    }
  }, 10);
});
