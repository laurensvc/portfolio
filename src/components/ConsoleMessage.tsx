"use client";

import { useEffect } from "react";

export const ConsoleMessage: React.FC = () => {
  useEffect(() => {
    const asciiArt = `
░██    ░██   ░██████                                        ░██                  
░██    ░██  ░██   ░██                                       ░██                  
░██    ░██ ░██        ░██    ░██    ░██  ░███████  ░██░████ ░██    ░██ ░███████  
░██    ░██ ░██        ░██    ░██    ░██ ░██    ░██ ░███     ░██   ░██ ░██        
 ░██  ░██  ░██         ░██  ░████  ░██  ░██    ░██ ░██      ░███████   ░███████  
  ░██░██    ░██   ░██   ░██░██ ░██░██   ░██    ░██ ░██      ░██   ░██        ░██ 
   ░███      ░██████     ░███   ░███     ░███████  ░██      ░██    ░██ ░███████  
                                                                                 
                                                                                 
                                                                                 
`;

    const message = `
%c${asciiArt}
%c
%c  Portfolio van Laurens VC
%c  Full-stack Developer & Designer
%c  
%c  Beschikbaar voor nieuwe projecten
%c  Neem contact op: je.email@example.com
%c
%c  Gebouwd met Next.js, TypeScript & Tailwind CSS
    `;

    const styles = [
      'font-family: monospace; font-size: 12px; color: #ff4d00; font-weight: bold;',
      '',
      'font-family: monospace; font-size: 14px; color: #0a0a0a; font-weight: bold;',
      'font-family: monospace; font-size: 12px; color: #9c9a97;',
      '',
      'font-family: monospace; font-size: 11px; color: #9c9a97;',
      'font-family: monospace; font-size: 11px; color: #ff4d00;',
      '',
      'font-family: monospace; font-size: 10px; color: #9c9a97; font-style: italic;'
    ];

    console.log(message, ...styles);
  }, []);

  return null;
};
