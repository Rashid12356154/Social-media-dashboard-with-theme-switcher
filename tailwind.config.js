/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {colors:{
      'white-bg':'hsl(0, 0%, 100%)',
      'Very-Pale-Blue':' hsl(225, 100%, 98%)',
      'ight-Grayish-Blue':'hsl(227, 47%, 96%)',
      'Dark-Grayish-Blue':'hsl(228, 12%, 44%)',
      'Very-Dark-Blue':'hsl(230, 17%, 14%)',
      'toggle':'hsl(230, 22%, 74%)',
      'gradient1':'hsl(210, 78%, 56%)',
      'gradient2':'hsl(146, 68%, 55%)',
      'facebook':'hsl(208, 92%, 53%)',
      'twitter':'hsl(203, 89%, 53%)',
      'insta1':'hsl(37, 97%, 70%)',
      'insta2':'hsl(329, 70%, 58%)',
      'youtube':'hsl(348, 97%, 39%)',
      'lime-green':'hsl(163, 72%, 41%)',
      'bright-red':'hsl(356, 69%, 56%)'

    }},
  },
  plugins: [],
}
