class DepartmentsController < ApplicationController

    def index 
        departments = Department.all 
        options = {
            inlcude: [:items]
        }
        render json: DepartmentSerializer.new(departments)
    end

    def show 
        department = Department.find(params[:id])
        render json: department
    end
end
