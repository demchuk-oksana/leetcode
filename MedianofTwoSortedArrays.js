nums1 = [1,2,3,5,6]
nums2 = [2,7,9]
let p1 = 0, p2 = 0
let m = nums1.length,n = nums2.length

let findMin = function(){
    if (p1 < m && p2 <n){
        return nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++] 
    }
    if (p1 < m){return nums1[p1++]}
    if (p2 <n){return nums2[p2++]}
}
let findMedian = function(){
    const merged = []
    for(i = 0; i < m +n; i++){
        merged.push(findMin())
        console.log(merged)
    }
    if (merged.length % 2 == 0){
        p1 = merged.length / 2
        p2 = p1 - 1
        return (merged[p1] + merged[p2]) / 2 
    }
    else{
        i = Math.trunc(merged.length / 2)
        return merged[i]
    }
    
}

console.log(findMedian())