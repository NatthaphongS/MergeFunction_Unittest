export default function merge (collection1:number[],collection2:number[]){
  const mergeResult :number[]=[]
  let i=0
  let j=0
  while (i<collection1.length && j<collection2.length){
    collection1[i]<=collection2[j] ? mergeResult.push(collection1[i++]) : mergeResult.push(collection2[j++])
  }
  while(i<collection1.length){
    mergeResult.push(collection1[i++])
  }
  while(j<collection2.length){
    mergeResult.push(collection2[j++])
  }
  console.log(mergeResult)
  return mergeResult
}
