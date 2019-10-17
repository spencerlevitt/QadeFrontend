package com.qade.ShareAttributesResultBroadcastReceiver;


//import android.content.Intent;

import com.yoti.mobile.android.sdk.AbstractShareAttributesBroadcastReceiver;

//import static android.content.Intent.FLAG_ACTIVITY_NEW_TASK;


/**
* Example of a broadcast receiver implementing the {@link AbstractShareAttributesBroadcastReceiver}
* In this example the call to the third party backend will be made by the Yoti Mobile SDK.
*/
public class ShareAttributesResultBroadcastReceiver extends AbstractShareAttributesBroadcastReceiver {

    @Override
    public boolean onCallbackReceived(String useCaseId, String callbackRoot, String token, String fullUrl) {
        /**
        If you want to manually handle the backend call, return true
        **/
        return false;
    }

    @Override
    public void onShareFailed(String useCaseId) {

    }

    @Override
    public void onCallbackSuccess(String useCaseId, byte[] response) {
        
    }

    @Override
    public void onCallbackError(String useCaseId, int httpErrorCode, Throwable error, byte[] response) {
        
    }
}
