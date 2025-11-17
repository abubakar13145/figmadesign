import React from 'react';
import { CustomCode } from '@components/CustomCode.jsx';

export default function MyComponent() {
  const svg = `
<svg id="6:58" width="666" height="92" viewBox="0 0 666 92" fill="none" xmlns="http://www.w3.org/2000/svg" class="timeline-svg">
<rect width="666" height="92" fill="white"></rect>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="11" letter-spacing="0em"><tspan x="108.141" y="73.455">1960s</tspan></text>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="11" letter-spacing="0em"><tspan x="27.5" y="73.455">1950s </tspan></text>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="11" letter-spacing="0em"><tspan x="189.243" y="73.455">1970s</tspan></text>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="11" letter-spacing="0em"><tspan x="269.424" y="73.455">1980s</tspan></text>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="11" letter-spacing="0em"><tspan x="350.526" y="73.455">1990s</tspan></text>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="11" letter-spacing="0em"><tspan x="431.627" y="73.455">2000s</tspan></text>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="11" letter-spacing="0em"><tspan x="514.573" y="73.455">2020s</tspan></text>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="11" letter-spacing="0em"><tspan x="597.518" y="73.455">Vision</tspan></text>
<line x1="28.4216" y1="42.5" x2="633" y2="42.5" stroke="#F2CBA7" stroke-width="11"></line>
<circle cx="488" cy="42.5" r="7.5" fill="#413A36"></circle>
<path d="M488.937 57.65V43.4994H489.78L498.964 52.4958V53.9952H494.935V55.4946H495.872V57.65L497.465 57.9311L497.09 60.1802H494.935L492.311 54.6512L488.937 57.65Z" fill="#EFEBE2"></path>
<path d="M491.374 44.0617H490.249V45.1862H491.374V44.0617Z" fill="#413A36"></path>
<path d="M492.498 45.1862H491.374V46.3108H492.498V45.1862Z" fill="#413A36"></path>
<path d="M493.623 46.3108H492.498V47.4353H493.623V46.3108Z" fill="#413A36"></path>
<path d="M494.747 47.4353H493.623V48.5599H494.747V47.4353Z" fill="#413A36"></path>
<path d="M495.872 48.5599H494.747V49.6844H495.872V48.5599Z" fill="#413A36"></path>
<path d="M496.996 49.6844H495.872V50.809H496.996V49.6844Z" fill="#413A36"></path>
<path d="M498.121 50.809H496.996V51.9335H498.121V50.809Z" fill="#413A36"></path>
<path d="M489.124 44.0617H490.249V42.9371H489.124V42H488V58.6808H489.124V57.5563H490.249V56.4317H489.124V44.0617Z" fill="#413A36"></path>
<path d="M493.623 55.3072H492.498V57.5563H493.623V55.3072Z" fill="#413A36"></path>
<path d="M492.498 54.1826H491.374V55.3072H492.498V54.1826Z" fill="#413A36"></path>
<path d="M491.374 55.3072H490.249V56.4317H491.374V55.3072Z" fill="#413A36"></path>
<path d="M496.996 55.3072H495.872V57.5563H496.996V55.3072Z" fill="#413A36"></path>
<path d="M498.121 57.5563H496.996V59.6179H498.121V57.5563Z" fill="#413A36"></path>
<path d="M494.747 57.5563H493.623V59.6179H494.747V57.5563Z" fill="#413A36"></path>
<path d="M494.747 59.6179V60.7425H495.872H496.996V59.6179H495.872H494.747Z" fill="#413A36"></path>
<path d="M500.37 54.1826V53.0581H499.245V51.9335H498.121V53.0581H494.747V55.3072H495.872V54.1826H500.37Z" fill="#413A36"></path>
</svg>`;

  return <CustomCode code={svg} />;
}
