/*
The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. ...Find what's wrong with it?
*/


function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name= this.firstName + ' ' + this.lastName;
}
