def main()
    # Caesar Cipher Project
    puts caesar_cipher("What a string!", 5)
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

$lowAlphabet = [*('a'..'z')]
$capAlphabet = [*('A'..'Z')]
$Alphabet = $lowAlphabet + $capAlphabet

def caesar_cipher(string = "", shift = 0)
    @chars = string.split("")
    
    @chars.each_with_index do |char, index|
        @low = $lowAlphabet.find_index(char)
        @cap = $capAlphabet.find_index(char)

        if @low != nil then
            @low = (@low + shift) % $lowAlphabet.length
            @chars[index] = $lowAlphabet[@low]
        end
        if @cap != nil then
            @cap = (@cap + shift) % $capAlphabet.length
            @chars[index] = $capAlphabet[@cap]
        end 
    end

    return @chars.join
end

def substrings(string = "", dictionary = {})
    @counts = {}

    @words = string.split(" ")
    @words.map do |word|
        word.select { |char| $Alphabet.include?(char) }
    end
    
    print @words
end

def stock_picker()

end

def bubble_sort()

end

main()