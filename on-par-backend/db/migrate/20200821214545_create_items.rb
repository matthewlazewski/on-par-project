class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :on_hand
      t.integer :par
      t.references :department, null: false, foreign_key: true

      t.timestamps
    end
  end
end
