import React from 'react'
import { motion } from 'framer-motion'

const GreenShape = () => {
  return (
    <motion.div 
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      className="green-shape-container"
      >
      <svg viewBox="0 0 886 806" fill="none" preserveAspectRatio="xMinYMin meet">
        <g filter="url(#filter0_dddddd)">
          <path fillRule="evenodd" clipRule="evenodd" d="M457.457 10.5192C527.779 -7.29647 612.467 -5.58804 667.941 40.0783C722.85 85.279 707.722 169.254 730.799 235.534C754.311 303.063 817.249 361.407 804.251 431.575C790.828 504.035 733.783 570.414 663.643 598.054C597.626 624.07 528.581 564.516 457.457 568.237C379.208 572.331 308.192 646.447 234.505 620.506C158.32 593.685 109.073 514.802 88.8491 438.471C69.2148 364.364 82.2788 280.146 127.791 217.728C168.706 161.615 254.547 167.095 313.944 129.762C368.11 95.7161 395.052 26.3293 457.457 10.5192Z" fill="#CCD5B2"/>
        </g>
        <defs>
          <filter id="filter0_dddddd" x="0" y="0" width="886" height="806" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2.76726"/>
            <feGaussianBlur stdDeviation="1.1069"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0112458 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="6.6501"/>
            <feGaussianBlur stdDeviation="2.66004"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0161557 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="12.5216"/>
            <feGaussianBlur stdDeviation="5.00862"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="22.3363"/>
            <feGaussianBlur stdDeviation="8.93452"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0238443 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="41.7776"/>
            <feGaussianBlur stdDeviation="16.711"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0287542 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="100"/>
            <feGaussianBlur stdDeviation="40"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow" result="effect6_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow" result="shape"/>
          </filter>
        </defs>
      </svg>
      </motion.div>
  )
}

export default GreenShape