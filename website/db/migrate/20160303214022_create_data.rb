class CreateData < ActiveRecord::Migration
  def change
    create_table :data do |t|
      t.integer :patient_id
      t.text :tap_data
      t.text :gait_data
      t.text :voice_data

      t.timestamps null: false
    end
  end
end
