import express from "express";
import {
  getPermissions,
  createPermission,
  updatePermission,
  deletePermission,
  seedDefaultPermissions,
} from "../../controllers/Roles&Permissions/permissionController.js";

const router = express.Router();


router.get("/", getPermissions);


router.post("/", createPermission);


router.put("/:id", updatePermission);


router.delete("/:id", deletePermission);

router.post("/seed", seedDefaultPermissions);

export default router;
