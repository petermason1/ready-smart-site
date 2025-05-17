#!/bin/bash

declare -A components=(
  [SmartServices]="SmartServices"
  [UseCases]="UseCases"
  [Testimonials]="Testimonials"
  [FooterCTA]="FooterCTA"
  [Hero]="Hero"
  [HowItWorks]="HowItWorks"
  [RecentPosts]="RecentPosts"
  [ScrollToTopButton]="ScrollToTopButton"
  [ServiceGrid]="ServiceGrid"
  [BlogPreview]="BlogPreview"
  [Footer]="Footer"
  [Navbar]="Navbar"
)

for folder in "${!components[@]}"; do
  file="src/components/$folder/index.js"
  echo "export { default } from './${components[$folder]}';" > "$file"
  echo "✓ Created $file"
done
