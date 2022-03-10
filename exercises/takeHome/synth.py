from msilib import sequence


def dnaSeq(sequence):
    # Write YOur Code Here
    # Split literatureText, loop over each word, maintain a dict about how often used
    # not going to count any word in wordsToExlcude

    outputs = []
    countMap = {}
    newSequence = sequence.Split('-')
    # Be able to discuss why changing the 
    # type of wordsToExclude to a set benefits time complexity versus a list

    for base in newSequence:
        if base in countMap:
            continue
        if base not in countMap:
            countMap[base] = 0
        countMap[base] += 1
    if len(countMap) == 0:
        return outputs
    maxCount = max(countMap.values())
    for word, count in countMap.items():
        if count == maxCount:
            outputs.append(word) 
    return outputs