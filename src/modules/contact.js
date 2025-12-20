import address from "../svgs/map-marker.svg";
import phone from "../svgs/phone.svg";
import page from "../svgs/file-find.svg";
import twitter from "../svgs/twitter.svg";
import fb from "../svgs/facebook.svg";
import "./contact.css";

export default function loadContact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const contactContain = document.createElement("div");
  contactContain.classList.add("contactContain");

  const title = document.createElement("h1");
  title.textContent = "Noir de Fleur";

  const contacts = [
    {
      type: "addr",
      icon: address,
      contact: "99212 Nowhere Dr., Notreal City, Notreal",
    },
    { type: "phone", icon: phone, contact: "901-NOT-REAL" },
    { type: "website", icon: page, contact: "#" },
    { type: "website", icon: twitter, contact: "twitter.com" },
    { type: "website", icon: fb, contact: "facebook.com" },
  ];

  class Contact {
    constructor(data) {
      this.id = crypto.randomUUID();
      this.type = data.type;
      this.icon = data.icon;
      this.contact = data.contact;
    }

    contactCard() {
      const card = document.createElement("div");
      card.classList.add("contactCard");

      const icon = document.createElement("img");
      icon.classList.add("icon");
      icon.src = this.icon;

      let contactInfo;

      if (this.type != "website") {
        contactInfo = document.createElement("p");
        contactInfo.textContent = this.contact;
      } else {
        contactInfo = document.createElement("a");
        contactInfo.textContent = this.contact;
        contactInfo.href = `https://${this.contact}`;
        contactInfo.target = "_blank";
        contactInfo.rel = "noopener noreferrer";
      }
      contactInfo.classList.add("contactInfo");

      card.append(icon, contactInfo);
      return card;
    }
  }

  contacts.forEach((data) => {
    const contact = new Contact(data);
    contactContain.append(contact.contactCard());
  });

  content.append(title, contactContain);
}
