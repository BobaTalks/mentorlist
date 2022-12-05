# BobaTalks Mentor List

- [BobaTalks Mentor List](#bobatalks-mentor-list)
  - [Browsing current mentors](#browsing-current-mentors)
  - [Adding New Mentors](#adding-new-mentors)

## Browsing current mentors

Visit the current list at [BobaTalks Mentor List](https://bobatalks.github.io)

## Adding New Mentors

1. Request access to the [Mentor list source file](https://docs.google.com/spreadsheets/d/1niDpc344z9BqAmOH8n_n9Wj92YCv6CQv2VA27Y42wh4/edit?usp=sharing)

2. Make changes to the source file and generate a new json string for the mentors list with the `Export JSON` button at the top of the workbook.

   ![image](assets/README-export.png)

   ![image](assets/README-export-sheet.png)

   - copy all generated json
   - _note: `ctrl/cmd + a` then `ctrl/cmd + c`_

   ![image](assets/README-copy-json.png)

3. Update the source file on GitHub

   - [Edit this file](https://github.com/BobaTalks/bobatalks.github.io/blob/main/mentorlist.json)

   ![image](assets/README-github.png)

   - Paste the entire exported JSON into this new file
   - _note: `ctrl/cmd + a` then `ctrl/cmd + v`_

   ![image](assets/README-paste-json.png)

4. Save directly to production (_main_ branch) - GitHub Pages will automatically redeploy typically within a minute
   ![image](assets/README-commit-main.png)

