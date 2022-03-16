import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkslist = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>
        {link}
      </a>
    );
  });
  return <nav>{linkslist}</nav>;
}

export default NavBar;
