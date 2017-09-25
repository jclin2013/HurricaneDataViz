def checkInterval(i, startYr, endYr)
  numToAdd = i + 1
  while startYr < endYr + 1
    startYr += numToAdd
  end
  startYr
end

def findWorkingInterval(startYr, endYr)
  diff = endYr - startYr
  result = []
  i = 0
  while i < diff
    result.push(i) if checkInterval(i, startYr, endYr) == endYr + 1
    i += 1
  end
  result
end
