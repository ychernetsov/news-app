# DataSnipper Test task

## Install dependencies
Run `yarn` to install dependencies. To start simple node server for serving data - install latest Node version. Version 16.13 was tested as compatible version.

## Development server

Run `yarn dev` to start a dev server on localhost: 8000 and client application on localhost:4200.
CSV file was transform to JSON format for simplifcation and applying REST API

## Routes

`/` Main route for displaying Main news and news timeline.
`/:id` Each news item has it's own details page.

## Testing plan

1. e2e testing
    - should render exact number of news on main page
    - should render most popular news should be rendered within exact number and range
    - should render most popular news item image
    - should render timeline is sorted order by time
    - should render timeline news number according to screen height

2. Integration testing
    - components should render relavant number of news items based on input mock
    - Image caption should be equal to title of most popular news item
    - first news item should have the highest popularity number
    - last news item should have the lowest popularity number
    - the same logic with dates

3. Unit tests 
   - test each component separately
   - all props are rendered properly


