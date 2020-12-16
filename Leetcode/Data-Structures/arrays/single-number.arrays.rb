# @param {Integer[]} nums
# @return {Integer}

dic = {};

def singleNumber(nums)
    nums.each do |number|
        if dic["number"] 
            dic["number"] += 1;
        else 
            dic["number"] = 1
        end
    end
end

singleNumber([2,2,1]) # 1
singleNumber([4,1,2,1,2]) # 4
singleNumber([1]) # 1

