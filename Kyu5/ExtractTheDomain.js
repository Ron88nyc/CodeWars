// Write a function that when given a URL as a string, parses out just the domain name
//  and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"











function domainName(url){
 return url.replace('http://','')
           .replace('https://','')
           .replace('www.','')
           .split('.')[0]
  
  

}

// you can chain the relace method multiple times if needed
// I would replace all the https:// and make it empty with the method and show only the first array after splitting it.
// Use the dot in the split method as a seperator.

// function domainName(url){
//     return url.replace('http://','').replace('https://','').replace('www.','').split('.')[0]
     
     
   
//    }

// Clever solution 