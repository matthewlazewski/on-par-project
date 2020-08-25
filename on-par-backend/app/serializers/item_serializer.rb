class ItemSerializer
    include FastJsonapi::ObjectSerializer 
    attributes :name, :on_hand, :par, :department_id
    belongs_to :department 
end