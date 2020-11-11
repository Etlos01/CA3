/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dtos;

import entities.Role;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Nyxis
 */
public class RoleDTO {
    private String roleName;
    private List<UserDTO> userList;

    public RoleDTO(Role r) {
        this.roleName = r.getRoleName();
        this.userList = new ArrayList<>();
        
        r.getUserList().forEach(user -> {
            this.userList.add(new UserDTO(user));
        });
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public List<UserDTO> getUserList() {
        return userList;
    }

    public void setUserList(List<UserDTO> userList) {
        this.userList = userList;
    }
    
    
}
