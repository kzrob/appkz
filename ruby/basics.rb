def main()
    # Caesar Cipher Project
    puts(caesar_cipher("What a string!", 5))
        #=> "Bmfy f xywnsl!"


    # Sub Strings Project
    _dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
    substrings("below", _dictionary)
        #=> { "below" => 1, "low" => 1 }
    substrings("Howdy partner, sit down! How's it going?", _dictionary)
        #=> { "down" => 1, "go" => 1, "going" => 1, "how" => 2, "howdy" => 1, "it" => 2, "i" => 3, "own" => 1, "part" => 1, "partner" => 1, "sit" => 1 }


    # Stock Picker Project
    stock_picker()

    # Bubble Sort Project
    bubble_sort()
end

LOWS = [*('a'..'z')]
CAPS = [*('A'..'Z')]
ALPHABET = LOWS + CAPS

def caesar_cipher(string = "", shift = 0)
    @chars = string.split("")
    
    @chars.each_with_index do |char, index|
        @low = LOWS.find_index(char)
        @cap = CAPS.find_index(char)

        if @low != nil then
            @low = (@low + shift) % LOWS.length
            @chars[index] = LOWS[@low]
        end
        if @cap != nil then
            @cap = (@cap + shift) % CAPS.length
            @chars[index] = CAPS[@cap]
        end
    end

    return @chars.join
end

def substrings(string = "", dictionary = {})
    @counts = {}

    @words = string.split(" ")

    print(@words)
    puts()

    @words.map do |word|
        word.chars.select { |char| ALPHABET.include?(char) }
    end
    
    print(@words)
    puts()
end

def stock_picker()

end

def bubble_sort()

end

main()