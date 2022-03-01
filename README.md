# Youlend Cypress test

This contains the Cypress tests for the web automation test and the API call test.

# Test 1: Web automation

Test can be found in cypress/integration/test.js. 

Bonus points:

3 issues found with problem_user:

1) Actual: Item pictures are all a picture of the same dog. Expected: Correct item picture should be displayed
2) Actual: Item title is 'Test.allTheThings() T-Shirt (Red) Expected. Item title is Sauce Labs T-Shirt
3) Actual: Sauce Labs Backpack description has 'carry.allTheThings()' in its item description. Expected: Description should be reworded in English

Technical debt:

1) Point 4 is 'Add another item to the cart, and verify that the total price is correct for the two items.' This is a little misleading as there is no total price displayed for the combination of the items. I tested that each price in the shopping cart was correct
2) Point 5 is 'Log out, and attempt to log in as locked_out_user. Verify that the error message reads ”access denied”.'. The error message is instead 'Epic sadface: Sorry, this user has been locked out.'
3) The 3rd issue found with problem_user is also a problem with standard_user

# Test 2: API Calls

Tests can be found in cypress/integration/APItest.js.
