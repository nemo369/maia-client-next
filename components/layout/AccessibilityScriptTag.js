function AccessibilityScriptTag() {
  if ('production' !== process.env.NODE_ENV) {
    return null;
  }
  return (
    <script
      src="https://system.user-a.co.il/Customers/551189819/_am-maya_com-/andifn1.js"
      id="andipath"
    />
  );
}

export default AccessibilityScriptTag;
