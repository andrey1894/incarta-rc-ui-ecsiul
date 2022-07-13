# ACCEPTANCE CRITERIA

- Fix date of joining dropdown issues:

  - Date options should be 1 to 31.
  - Month options should be January to December.
  - Year options should be 1992 to 2022.

- Create reusable component for dropdown which accepts value as string and number.

  - Use the reusable dropdown for DOJ and Role fields.

- Role dropdown option should be text, but selected option value should be a number.

  - Role dropdown options should be in the order:
    [CEO(25), Director(20), Manager(15), Lead Developer(10), Senior Developer(5), Developer(0)]
  - Role dropdown default selected should be 'Developer'.

- Change 'Experience' to slider.

  - Based on selection of Role, change the slider value to the selected value of Role.

- Import bootstrap CSS and create a 100% width column for DOJ. Split the Role and YOE into 50% width of screen each.
