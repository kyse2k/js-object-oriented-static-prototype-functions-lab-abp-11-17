function IcebreakerResponse(email){
  this.email = email
}
IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(email){
    new IcebreakerResponse(email)
  })
}
