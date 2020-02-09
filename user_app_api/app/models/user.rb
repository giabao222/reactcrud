class User < ApplicationRecord
    
        scope :with_query_search, ->(search) {where("subjects.subject_name LIKE ? OR crews.name LIKE ? OR students.name LIKE ?", search, search, search)}  

end
