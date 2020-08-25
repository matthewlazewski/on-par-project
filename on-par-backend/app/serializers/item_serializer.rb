class ItemSerializer
    include FastJsonapi::ObjectSerializer 
    attributes :name, :on_hand, :par
end