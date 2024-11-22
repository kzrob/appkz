def main()
    caesar_cipher("What a string!", 5)
end

def caesar_cipher(string = "", shift = 0)
    _lows = [*('a'..'z')]
    _caps = [*('A'..'Z')]

    _chars = string.split("")
    
    _chars.each_with_index do |char, index|
        _low = _lows.find_index(char)
        _cap = _caps.find_index(char)

        if _low != nil then
            _low = (_low + shift) % _lows.length
            _chars[index] = _lows[_low]
        end
        if _cap != nil then
            _cap = (_cap + shift) % _caps.length
            _chars[index] = _caps[_cap]
        end 
    end

    puts(_chars.join)
end

main()