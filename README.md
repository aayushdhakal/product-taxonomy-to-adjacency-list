This project can mainly used in the product categories section on the ecommerce site.

Working on the Porject

Prior to using this Project.

Use the each of the file in the project.
  1.aden.js
  2.adjacencyListChildList.js
  3.traversingAdjacencyList.js
  
  
  1.Aden.js
  
   SUMMARY
   Using this file to can transform adjacencyListTaxonomyRaw.json to 
   adjacencyListTaxonomyFinal.js
   
    ADVANCE
    Running this file by (node Aden.js) we can change the file format form the 
    raw object to final object.
    e.g.1
    FROM
    
    // {
    //    "s.n": "2",
    //    "PARENT": "Animals & Pet Supplies",
    //    "SUB-PARENT_0": "Pet Supplies",
    //    "SUB-PARENT_1": null,
    //    "SUB-PARENT_2": null,
    //    "SUB-PARENT_3": null,
    //    "SUB-PARENT_4": null,
    //    "SUB-PARENT_5": null
    // }
    
    TO
    
    // {
    //    "parent": "root",
    //       "subParent": "Animals & Pet Supplies",
    //          "flag": "parent"
    // }, {
    //    "parent": "Animals & Pet Supplies",
    //       "subParent": "Pet Supplies",
    //          "flag": "child"
    // }, {
    //    "parent":"Toy Motorcycles",
    //        "subParent":null,
    //            "flag":"leaf"
    //}
    
    In the final file parent as a "root" indicate the starting point of
    the branch
    e.g.2 Mobile Phone Accessories > Telephony > Communications > Electronics
    
    In above e.g.2 "Electronics" is stored in the object as parent as root
    implying as the starting point in element
    
    In e.g.2 "Communications" implies as the branch between the "Telephony" and "Electronics"
    as the flag represent as the "child"
    
    In e.g.1 "Toy Motorcycles" is represented as the child or the last point 
    
    execution time is usually 4 to 6 mins.
    
   2.AdjacencyListChildList.js
    
      SUMMARY
        It is used to get all the list of the child value of the element from every object from the raw file
        
      ADVANCE
        for e.g.3 we give the value as the "Horse Grooming" as the input value and 
        it will traverse the raw file and get all the child values
        the output will be
        Output
        [
          'Horse Grooming',
          'Horse Grooming Combs, Brushes & Mitts',
          'Horse Clippers & Trimmers'
        ]
      
     3.traversingAdjacencyList.js
     
        SUMMARY
          it is used to travered the value from the leaf element to root element or child element to root element.
          
        ADVANCE
          e.g.4 if we take the value like "Jigsaw Puzzle Accessories" and process it and then 
          it will give an output as 
          Output
          Jigsaw Puzzle Accessories > Puzzles > Toys & Games
          
          where the Jigsaw Puzzle Accessories and given element, then Puzzles then Toys & Games
   
    
    
    
