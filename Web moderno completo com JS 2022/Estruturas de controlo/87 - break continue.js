const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(i in nums){
    if(i == 5) break
    console.log(`${i} = ${nums[i]}`)
}

for(j in  nums){
    if(j == 5) continue /* nao sai do for/if apenas salta 1 repeticao */
    console.log(`${j} = ${nums[j]}`)
}

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo // assim da break ao primeiro for e nao ao for onde ele esta inserido
        console.log(`Par = ${a}, ${b}`)
    }
}