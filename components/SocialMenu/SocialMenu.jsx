import React, { useState } from 'react';
import { IoShareSocial, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';
import styles from './SocialMenu.module.css';

const socialIcons = [
  { id: 0, color: '#1da1f2', Icon: IoLogoTwitter, platform: 'twitter' },
  { id: 1, color: '#0a66c2', Icon: IoLogoLinkedin, platform: 'linkedin' },
];

const SocialMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleShareClick = (platform) => {
    let text, shareURL;

    if (platform === "twitter") {
      text = "Join me at Event Name on October 10, 2023! #";
      shareURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    } else if (platform === "linkedin") {
      text = "Join me at Event Name on October 10, 2023!";
      const url = "https://chainlink-dehradun.github.io/"; // Replace with your actual event URL
      shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    }

    if (shareURL) {
      window.open(shareURL, '_blank');
    }
  };

  return (
    <div className={`${styles.menu} ${isActive ? styles.active : ''}`}>
      <div className={styles.toggle} onClick={() => setIsActive(!isActive)}>
        <IoShareSocial />
      </div>

      {socialIcons.map(item => (
        <li key={item.id} style={{ '--i': item.id.toString(), '--clr': item.color }} className={isActive ? styles.active : ''}>
          <a href="#" className={styles.link} onClick={() => handleShareClick(item.platform)}>
            <item.Icon />
          </a>
        </li>
      ))}
    </div>
  );
};

export default SocialMenu;
