import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaHackerrank} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://github.com/MatheusPhillip" target="_blank" rel="noreferrer"><BsGithub /></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/matheus-miranda-83b3b8186/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
        <div>
          <a href="https://www.hackerrank.com/profile/matheuspssmiran1" target="_blank" rel="noreferrer"><FaHackerrank /></a>
        </div>
    </div>
  )
}

export default SocialMedia;