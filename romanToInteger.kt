class Solution {
    fun romanToInt(s: String): Int {
    
    //create map to define the roman 
    val map = hashMapOf(
        'I' to 1,
        'V' to 5,
        'X' to 10,
        'L' to 50,
        'C' to 100,
        'D' to 500,
        'M' to 1000
    )
    var result = 0
    var i = 0
    while (i < s.length) {
        val current = map[s[i]] ?: 0
        val next = if (i + 1 < s.length) map[s[i + 1]] ?: 0 else 0
        if (current < next) {
            result += next - current
            i += 2
        } else {
            result += current
            i++
        }
    }
    return result


    }
}
