## \#1
The package react-resize-aware has a bug in building that expect React to be in window, it should be manually converted to JS withouth JSX and will continue working
You can see https://github.com/FezVrasta/react-resize-aware/issues/58 for mor info

## \#2 
I've changed the build process to use Vite with success

## \#3
I've studied the internal functionality of the gutenberg editor to create this playground
