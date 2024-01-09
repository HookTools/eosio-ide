import React from 'react'

export const Loader: React.FC<SVGAElement> = ({ props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      {...props}
    >
      <path
        d="M12 4.8C13.3255 4.8 14.4 3.72548 14.4 2.4C14.4 1.07452 13.3255 0 12 0C10.6745 0 9.59998 1.07452 9.59998 2.4C9.59998 3.72548 10.6745 4.8 12 4.8Z"
        fill="#056DCD"
      />
      <path
        d="M18.7882 7.61177C20.1137 7.61177 21.1882 6.53725 21.1882 5.21177C21.1882 3.88628 20.1137 2.81177 18.7882 2.81177C17.4627 2.81177 16.3882 3.88628 16.3882 5.21177C16.3882 6.53725 17.4627 7.61177 18.7882 7.61177Z"
        fill="#056DCD"
      />
      <path
        d="M21.6 14.4001C22.9254 14.4001 24 13.3256 24 12.0001C24 10.6746 22.9254 9.6001 21.6 9.6001C20.2745 9.6001 19.2 10.6746 19.2 12.0001C19.2 13.3256 20.2745 14.4001 21.6 14.4001Z"
        fill="#056DCD"
      />
      <path
        d="M18.7882 21.1882C20.1137 21.1882 21.1882 20.1137 21.1882 18.7882C21.1882 17.4627 20.1137 16.3882 18.7882 16.3882C17.4627 16.3882 16.3882 17.4627 16.3882 18.7882C16.3882 20.1137 17.4627 21.1882 18.7882 21.1882Z"
        fill="#056DCD"
      />
      <path
        d="M12 24C13.3255 24 14.4 22.9254 14.4 21.6C14.4 20.2745 13.3255 19.2 12 19.2C10.6745 19.2 9.59998 20.2745 9.59998 21.6C9.59998 22.9254 10.6745 24 12 24Z"
        fill="#056DCD"
      />
      <path
        d="M5.21189 21.1882C6.53737 21.1882 7.61189 20.1137 7.61189 18.7882C7.61189 17.4627 6.53737 16.3882 5.21189 16.3882C3.88641 16.3882 2.81189 17.4627 2.81189 18.7882C2.81189 20.1137 3.88641 21.1882 5.21189 21.1882Z"
        fill="#056DCD"
      />
      <path
        d="M2.4 14.4001C3.72548 14.4001 4.8 13.3256 4.8 12.0001C4.8 10.6746 3.72548 9.6001 2.4 9.6001C1.07452 9.6001 0 10.6746 0 12.0001C0 13.3256 1.07452 14.4001 2.4 14.4001Z"
        fill="#056DCD"
      />
      <path
        d="M5.21189 7.61177C6.53737 7.61177 7.61189 6.53725 7.61189 5.21177C7.61189 3.88628 6.53737 2.81177 5.21189 2.81177C3.88641 2.81177 2.81189 3.88628 2.81189 5.21177C2.81189 6.53725 3.88641 7.61177 5.21189 7.61177Z"
        fill="#056DCD"
      />
    </svg>
  )
}
